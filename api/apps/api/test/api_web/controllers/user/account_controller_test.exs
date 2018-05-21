defmodule APIWeb.User.AccountControllerTest do
  use APIWeb.ConnCase
  use DB.DataCase

  alias User.Account

  @valid_params %{email: "foo@bar.com", password: "s3cr3t"}
  @invalid_params %{email: "", password: ""}

  describe "GET show/2" do
    test "returns user profile when authorized", %{conn: conn} do
      {:ok, account} = User.create_account(@valid_params)
      {:ok, token} = API.Session.sign(account)

      response =
        conn
        |> put_req_header("authorization", token)
        |> get(account_path(conn, :show))
        |> json_response(:ok)

      assert response["profile"]
      assert response["profile"]["email"] == account.email
    end

    test "returns unauthorized when not authorized", %{conn: conn} do
      conn = conn |> get(account_path(conn, :show))

      assert conn.status() == 401
      assert conn.halted()
    end

    test "returns unauthorized with invalid token", %{conn: conn} do
      token = "blah"

      conn =
        conn
          |> put_req_header("authorization", token)
          |> get(account_path(conn, :show))

      assert conn.status() == 401
      assert conn.halted()
    end
  end

  describe "POST create/2" do
    test "creates user account with valid params", %{conn: conn} do
      post(conn, account_path(conn, :create), @valid_params)

      account = Repo.get_by(Account, email: @valid_params[:email])

      assert %Account{} = account
      assert account.email == @valid_params[:email]
    end

    test "returns user profile with valid params", %{conn: conn} do
      conn = post(conn, account_path(conn, :create), @valid_params)

      response = json_response(conn, 201)

      assert response["profile"]["email"] == @valid_params[:email]
    end

    test "returns auth token with valid params", %{conn: conn} do
      conn = post(conn, account_path(conn, :create), @valid_params)

      response = json_response(conn, 201)

      account = Repo.get_by(Account, email: @valid_params[:email])

      token = response["auth"]["token"]

      {:ok, data} = API.Session.verify(token)

      assert data[:id] == account.id
    end

    test "returns error.json", %{conn: conn} do
      conn = post(conn, account_path(conn, :create), @invalid_params)

      response =
        conn
        |> post(account_path(conn, :create), @invalid_params)
        |> json_response(:unprocessable_entity)

      assert response["errors"]["email"] == ["can't be blank"]
      assert response["errors"]["password"] == ["can't be blank"]
    end
  end
end
