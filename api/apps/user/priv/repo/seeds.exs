alias User.{Account, Profile}

accounts = [
  %{
    email: "scott@email.com",
    password: "123456",
    profile: %{
      name: "admin"
    }
  },
  %{
    email: "user1@email.com",
    password: "password",
    profile: %{
      name: "user1"
    }
  },
  %{
    email: "user2@email.com",
    password: "password",
    profile: %{
      name: "user2"
    }
  }
]

accounts
|> Enum.map(&Account.registration_changeset(%Account{}, &1))
|> Enum.map(&DB.Repo.insert!(&1))