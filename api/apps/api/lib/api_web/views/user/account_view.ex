defmodule APIWeb.User.AccountView do
  use APIWeb, :view

  def render("show.json", %{account: account}) do
    %{
      account: render("account.json", %{account: account})
    }
  end

  def render("account.json", %{account: account}) do
    %{
      email: account.email,
      inserted_at: account.inserted_at
    }
  end
end