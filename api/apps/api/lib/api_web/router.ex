defmodule APIWeb.Router do
  use APIWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", APIWeb do
    pipe_through :api

    resources "/user", UserController, only: [:create]

    post "/session/refresh", User.SessionController, :refresh
    post "/session", User.SessionController, :create
    delete "/session", User.SessionController, :delete
  end
end
