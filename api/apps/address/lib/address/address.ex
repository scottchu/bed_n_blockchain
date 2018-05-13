defmodule Address.Address do
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

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:street1, :street2, :city, :state, :country, :postal_code, :coordinate])
    |> validate_required([:street1, :city, :state, :country, :postal_code, :coordinate])
  end
end
