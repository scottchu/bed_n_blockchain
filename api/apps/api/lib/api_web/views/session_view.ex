defmodule APIWeb.SessionView do
  use APIWeb, :view

  def render("show.json", %{account: account, token: token}) do
    %{
      auth: %{
        token: token
      },
      profile: %{
        email: account.email
      }
    }
  end

  def render("errors.json", %{errors: errors}) do
    %{errors: errors}
  end

  def render("forbidden.json", %{errors: errors}) do
    %{errors: errors}
  end
end