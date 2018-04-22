defmodule APIWeb.SessionView do
  use APIWeb, :view

  def render("show.json", %{account: account, token: token}) do
    %{
      auth: render_auth(token),
      profile: render_profile(account)
    }
  end

  def render_auth(nil), do: nil

  def render_auth(token), do: %{token: token}

  def render_profile(account) do
    %{
      email: account.email
    }
  end

end