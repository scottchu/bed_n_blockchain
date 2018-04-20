defmodule APIWeb.Router do
  use APIWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", APIWeb do
    pipe_through :api

    scope "/user" do

      post "/session/refresh", User.SessionController, :refresh
      post "/session", User.SessionController, :create
      delete "/session", User.SessionController, :delete
    end
  end
end
