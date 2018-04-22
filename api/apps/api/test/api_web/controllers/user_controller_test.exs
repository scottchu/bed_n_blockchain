defmodule APIWeb.UserControllerTest do
  use APIWeb.ConnCase
  use DB.DataCase

  @valid_params %{email: "bar@baz.com", password: "s3cr3t"}

  describe "create/2 with valid params" do
    test "creates user account", %{conn: conn} do
      post(conn, user_path(conn, :create), @valid_params)

      account = Repo.get_by(User.Account, email: @valid_params[:email])

      assert %User.Account{} = account
      assert account.email == @valid_params[:email]
    end

    test "returns user profile", %{conn: conn} do
      conn = post(conn, user_path(conn, :create), @valid_params)

      response = json_response(conn, 201)

      assert response["profile"]["email"] == @valid_params[:email]
    end

    # test "returns auth token", %{conn: conn} do
    #   conn = post(conn, user_path(conn, :create), @valid_params)

    #   response = json_response(conn, 201)

    #   assert response["auth"]["token"]
    # end
  end

  @invalid_params %{email: "", password: ""}
  describe "create/2 with invalid params" do
    test "returns error.json", %{conn: conn} do
      conn = post(conn, user_path(conn, :create), @invalid_params)

      response = json_response(conn, :unprocessable_entity)

      assert response["errors"]["email"] == ["can't be blank"]
      assert response["errors"]["password"] == ["can't be blank"]
    end
  end
end
