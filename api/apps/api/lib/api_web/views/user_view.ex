defmodule APIWeb.UserView do
  use APIWeb, :view

  def render("show.json", %{account: account}) do
    %{
      profile: %{
        email: account.email
      }
    }
  end
end