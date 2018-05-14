defmodule Listing.Property do
  use Ecto.Schema

  import Ecto.Changeset

  schema "properties" do
    field(:capacity, :integer)
    field(:name, :string)
    field(:price, :decimal, precision: 12, scale: 2)
    field(:type, :string)

    has_one :address, Listing.Address

    belongs_to :account, User.Account

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:capacity, :name, :price, :type])
    |> validate_required([:capacity, :name, :price, :type])
    |> validate_inclusion(:type, ["house", "condo", "villa", "other"])
    |> validate_number(:capacity, greater_than: 0)
    |> validate_number(:price, greater_than: Decimal.new(0))
    |> assoc_constraint(:account)
  end
end
