defmodule User do
  alias DB.Repo
  alias User.Account

  import Ecto.Query

  def authenticate(%{"email" => email, "password" => password}) do
    account = Repo.get_by(Account, email: String.downcase(email))

    case check_password(account, password) do
      true -> {:ok, account}
      _ -> {:error, "Invalid email or password"}
    end
  end

  defp check_password(account, password) do
    case account do
      nil -> Comeonin.Argon2.dummy_checkpw()
      _ -> Comeonin.Argon2.checkpw(password, account.password_hash)
    end
  end

  def create_account(params \\ %{}) do
    Account.registration_changeset(%Account{}, params)
    |> Repo.insert()
  end

end
