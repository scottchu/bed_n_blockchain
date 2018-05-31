defmodule APIWeb.Router do
  use APIWeb, :router

  alias User.{AccountController, ProfileController}

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", APIWeb do
    pipe_through(:api)

    get("/listings", ListingController, :index)

    get("/search", ListingController, :search)

    post("/session", SessionController, :create)

    scope "/user" do
      resources(
        "/account",
        AccountController,
        only: [:show, :create],
        singleton: true
      )
    end
  end
end
