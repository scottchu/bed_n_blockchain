defmodule User.Account do
  use Ecto.Schema

  import Ecto.Changeset
  import Ecto.Query

  alias User.Profile

  schema "accounts" do
    field(:email, :string)
    field(:password_hash, :string)
    field(:password, :string, virtual: true)

    has_one :profile, Profile

    timestamps()
  end

  @email_format ~r/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:email])
    |> cast_assoc(:profile)
    |> validate_required([:email])
    |> unique_constraint(:email)
    |> validate_format(:email, @email_format)
  end

  def registration_changeset(struct, params \\ %{}) do
    struct
    |> changeset(params)
    |> cast(params, [:password])
    |> validate_required([:password])
    |> validate_length(:password, min: 6, max: 100)
    |> hash_password()
  end

  def hash_password(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        password_hash = Comeonin.Argon2.hashpwsalt(password)

        put_change(changeset, :password_hash, password_hash)

      _ ->
        changeset
    end
  end
end
