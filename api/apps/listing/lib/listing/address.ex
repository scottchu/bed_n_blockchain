defmodule Listing.Address do
  use Ecto.Schema

  import Ecto.Changeset

  schema "addresses" do
    field(:street1, :string)
    field(:street2, :string)
    field(:city, :string)
    field(:state, :string)
    field(:country, :string)
    field(:postal_code, :string)

    field(:coordinate, DB.Ecto.Type.Point)

    belongs_to :property, Listing.Property

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:street1, :street2, :city, :state, :country, :postal_code, :coordinate, :property_id])
    |> validate_required([:street1, :city, :state, :country, :postal_code, :coordinate])
    |> assoc_constraint(:property)
    |> foreign_key_constraint(:property_id)
  end
end
