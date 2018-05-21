defmodule APIWeb.ListingControllerTest do
  use APIWeb.ConnCase
  use DB.DataCase

  import Listing.Factory

  alias Listing.{Property}

  describe "GET index/2 by default" do
    setup do
      {:ok, account} =
        User.Factory.create(:account)
        |> User.create_account

      properties =
        1..30
        |> Enum.map(&(create(:property, %{counter: &1, account_id: account.id})))
        |> Enum.map(&Property.changeset(%Property{}, &1))
        |> Enum.map(&DB.Repo.insert!(&1))
        |> DB.Repo.preload([:account, :address])

      {:ok, %{properties: properties}}
    end

    test("returns 20 properties order by updated_at by default", %{conn: conn, properties: properties}) do
      json =
        conn
        |> get(listing_path(conn, :index))
        |> json_response(:ok)

      expected =
        properties
        |> Enum.sort(&(&1.updated_at >= &2.updated_at))
        |> Enum.take(20)
        |> Enum.map(&(&1.id))

      output =
        json
        |> Map.get("properties")
        |> Enum.map(&(&1["id"]))

      assert output == expected
      assert json["totalPages"] == 2
    end

    test("returns the 2nd page when requesting page 2", %{conn: conn, properties: properties}) do
      json =
        conn
        |> get(listing_path(conn, :index, %{page: 2}))
        |> json_response(:ok)

       expected =
        properties
        |> Enum.sort(&(&1.updated_at >= &2.updated_at))
        |> Enum.take(20 - length(properties))
        |> Enum.map(&(&1.id))

      output =
        json
        |> Map.get("properties")
        |> Enum.map(&(&1["id"]))

      assert output == expected
      assert json["totalPages"] == 2
    end

    test("returns empty properties when requesting non-exist page", %{conn: conn}) do
      json =
        conn
        |> get(listing_path(conn, :index, %{page: 3}))
        |> json_response(:ok)

       output =
        json
        |> Map.get("properties")

      assert output == []
      assert json["totalPages"] == 2
    end
  end
end