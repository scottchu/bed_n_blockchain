defmodule API.SessionTest do
  use ExUnit.Case

  alias API.Session
  alias User.Account
  alias Phoenix.Token

  setup do
    config = Application.get_env(:api, API.Session)
    {:ok, config}
  end

  describe "sign" do
    test "with account id", %{secret: secret, salt: salt} do
      account = %Account{id: 9}

      {:ok, token} = Session.sign(account)

      assert {:ok, %{id: account.id}} == Token.verify(secret, salt, token, max_age: 10)
    end

    test "with invalid account" do
      account = %Account{}

      assert {:error, "invalid account"} == Session.sign(account)
    end
  end

  describe "verify" do
    test "with valid token" do
      account = %Account{id: 9}

      {:ok, token} = Session.sign(account)

      assert {:ok, %{id: account.id}} == Session.verify(token)
    end

    test "with expire token", %{secret: secret, salt: salt} do
      account = %Account{id: 9}

      token = Token.sign(secret, salt, %{id: account.id})

      assert {:error, :expired} == Session.verify(token, -1)
    end

    test "with random token" do
      assert {:error, :invalid} == Session.verify("SFMyNTY.g3QAAAACZAAEZGF0YXQAAAABZAACaWRhCWQABnNpZ25lZG4GAB4DVRRjAQ.gI662-h00dchfqmobZ9EDnNyFotyGiLvA4GYzS32FQs")
    end
  end
end