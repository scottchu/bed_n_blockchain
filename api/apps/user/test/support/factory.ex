defmodule User.Factory do

  alias User.{Account, Profile}

  def create(_, params \\ %{})
  def create(:account, params) do
    %{
      email: create(:email, params),
      password: create(:password, params),
      profile: create(:profile, params)
    }
    |> Map.merge(params)
  end

  def create(:profile, %{profile: profile}) do
    create(:profile, profile)
  end
  def create(:profile, params) do
    %{
      name: create(:name, params)
    }
    |> Map.merge(params)
  end

  def create(:email, %{email: email}), do: email
  def create(:email, %{counter: counter}), do: "user#{counter}@email.com"
  def create(:email, _), do: "user@email.com"

  def create(:password, %{password: password}), do: password
  def create(:password, _), do: "123456"

  def create(:name, %{name: name}), do: name
  def create(:name, %{counter: counter}), do: "user#{counter}"
  def create(:name, _), do: "user"
end