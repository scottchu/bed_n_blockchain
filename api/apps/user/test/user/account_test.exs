defmodule User.AccountTest do
  use ExUnit.Case

  alias User.Account

  @valid_attrs %{email: "bar@baz.com", password: "s3cr3t"}

  test "changeset with valid attributes" do
    changeset = Account.changeset(%Account{}, @valid_attrs)

    assert changeset.valid?
  end

  test "changeset, email is not present" do
    changeset = Account.changeset(%Account{}, Map.put(@valid_attrs, :email, ""))

    refute changeset.valid?
  end

  test "changeset, email invalid format" do
    changeset = Account.changeset(%Account{}, Map.put(@valid_attrs, :email, "scott@yroo"))

    refute changeset.valid?
  end

  test "registration_changeset with valid attributes" do
    changeset = Account.registration_changeset(%Account{}, @valid_attrs)

    assert changeset.valid?
  end

  test "registration_changeset, password is not present" do
    attrs = Map.delete(@valid_attrs, :password)
    changeset = Account.registration_changeset(%Account{}, attrs)

    refute changeset.valid?
  end

  test "registration_changeset, password too short" do
    attrs = Map.put(@valid_attrs, :password, "12345")
    changeset = Account.registration_changeset(%Account{}, attrs)

    refute changeset.valid?
  end
end
