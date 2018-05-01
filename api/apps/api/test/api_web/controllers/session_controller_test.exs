defmodule APIWeb.SessionControllerTest do
  use APIWeb.ConnCase
  use DB.DataCase

  @valid_credential %{email: "bar@baz.com", password: "s3cr3t"}

  describe "sign in with valid credentials" do
    test "returns auth token", %{conn: conn} do
      {:ok, account} = User.create_account(@valid_credential)

      response =
        conn
        |> post(session_path(conn, :create), @valid_credential)
        |> json_response(200)

      assert {:ok, %{id: account.id}} == API.Session.verify(response["auth"]["token"])
    end
  end

  @invalid_credential %{email: "bar@baz.com", password: "123456"}
  describe "sign in with invalid credentials" do
    test "response with unauthorized", %{conn: conn} do
      {:ok, _} = User.create_account(@valid_credential)

      response =
        conn
        |> post(session_path(conn, :create), @invalid_credential)
        |> json_response(401)

      assert %{"errors" => ["Invalid email or password"]} == response
    end
  end
end
