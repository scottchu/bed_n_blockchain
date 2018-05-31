defmodule User.Factory do

  alias User.{Account, Profile}

  def create(_, params \\ %{})
  def create(:account, params) do
    %{
      email: create(:email, params),
      password: create(:password, params)
    }
    |> Map.merge(params)
  end

  def create(:email, %{email: email}), do: email
  def create(:email, %{counter: counter}), do: "user#{counter}@email.com"
  def create(:email, _), do: "user@email.com"

  def create(:password, %{password: password}), do: password
  def create(:password, _), do: "123456"
end