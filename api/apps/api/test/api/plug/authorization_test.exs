defmodule API.Plug.AuthorizationTest do
  use APIWeb.ConnCase
  use DB.DataCase

  alias API.Plug.Authorization

  @opts Authorization.init([])

  @valid_attrs %{
    "email" => "test@example.com",
    "password" => "123456"
  }

  test "request passes through when authorization token is valid", %{conn: conn} do
    {:ok, account} = User.create_account(@valid_attrs)

    {:ok, token} = API.Session.sign(account)

    conn =
      conn
      |> put_req_header("authorization", "bearer " <> token)
      |> Authorization.call(@opts)

    current_account = conn.assigns().current_account()

    assert current_account
    assert current_account.id == account.id
  end

  test "request is halted when token is invalid", %{conn: conn} do
    {:ok, _} = User.create_account(@valid_attrs)

    token = "random token"

    conn =
      conn
      |> put_req_header("authorization", "bearer " <> token)
      |> Authorization.call(@opts)

    assert conn.status() == 401
    assert conn.halted()
  end

  test "request is halted when token is missing", %{conn: conn} do
    {:ok, _} = User.create_account(@valid_attrs)

    conn =
      conn
      |> Authorization.call(@opts)

    assert conn.status() == 401
    assert conn.halted()
  end

  test "request is halted when user does not exist", %{conn: conn} do
    account = %User.Account{id: 1}
    {:ok, token} = API.Session.sign(account)

    conn =
      conn
      |> put_req_header("authorization", "bearer " <> token)
      |> Authorization.call(@opts)

    assert conn.status() == 401
    assert conn.halted()
  end
end
