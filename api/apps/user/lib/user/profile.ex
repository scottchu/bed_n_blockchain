defmodule User.Profile do
  use Ecto.Schema

  import Ecto.Changeset

  alias User.Account

  schema "profiles" do
    field(:name, :string)

    belongs_to :account, Account

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :account_id])
    |> validate_required([:name])
    |> assoc_constraint(:account)
    |> unique_constraint(:account_id)
  end
end