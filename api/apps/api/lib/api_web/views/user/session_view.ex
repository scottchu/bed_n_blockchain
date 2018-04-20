defmodule APIWeb.User.SessionView do
  use APIWeb, :view

  def render("show.json", _) do
    %{
      auth: %{
        token: "123"
      },
      profile: %{
        email: "scott@yroo.com",
        name: "Scott Chu"
      }
    }
  end
end