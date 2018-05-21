defmodule Listing.Factory do

  import Enum, only: [random: 1]

  def create(_, params \\ %{})
  def create(:property, params) do
    %{
      capacity: create(:capacity, params),
      name: create(:name, params),
      price: create(:price, params),
      type: create(:type, params),
      address: create(:address, params)
    }
    |> Map.merge(params)
  end

  def create(:address, %{address: address}) do
    create(:address, address)
  end

  def create(:address, params) do
    %{
      street1: create(:street1, params),
      city: create(:city, params),
      state: create(:state, params),
      postal_code: create(:postal_code, params),
      country: create(:country, params),
      coordinate: create(:coordinate, params)
    }
    |> Map.merge(params)
  end

  def create(:coordinate, %{coordinate: coordinate}) do
    create(:coordinate, coordinate)
  end

  def create(:coordinate, %{x: _, y: _} = params), do: params
  def create(:coordinate, _), do: %{x: random(1..100), y: random(1..100)}

  def create(:name, %{name: name}), do: name
  def create(:name, _), do: "Property"

  def create(:capacity, %{capacity: capacity}), do: capacity
  def create(:capacity, _), do: random(1..10)

  def create(:type, %{type: type}), do: type
  def create(:type, _), do: random(["condo", "house", "villa", "other"])

  def create(:price, %{price: price}), do: price
  def create(:price, _), do: random(1..100)

  def create(:street1, %{street1: street1}), do: street1
  def create(:street1, _) do
    "#{random(1..100)} #{random(["ave", "circle", "cres", "st"])}"
  end

  def create(:street1, %{street1: street1}), do: street1
  def create(:street1, _) do
    "#{random(1..100)} #{random(["ave", "circle", "cres", "st"])}"
  end

  def create(:city, %{city: city}), do: city
  def create(:city, _), do: "city"

  def create(:state, %{state: state}), do: state
  def create(:state, _), do: "state"

  def create(:postal_code, %{postal_code: postal_code}), do: postal_code
  def create(:postal_code, _), do: "postal_code"

  def create(:country, %{country: country}), do: country
  def create(:country, _), do: "country"
end