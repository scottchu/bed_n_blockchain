defmodule APIWeb.SessionView do
  use APIWeb, :view

  alias APIWeb.User.AccountView

  def render("show.json", %{account: account, token: token}) do
    %{
      auth: render("auth.json", %{token: token}),
      account: render_one(account, AccountView, "account.json")
    }
  end

  def render("auth.json", %{token: token}) do
    %{token: token}
  end

  def render("errors.json", %{errors: errors}) do
    %{errors: errors}
  end

  def render("forbidden.json", %{errors: errors}) do
    %{errors: errors}
  end
end