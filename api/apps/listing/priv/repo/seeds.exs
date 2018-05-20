properties = [
  %{
    capacity: 2,
    name: "1 Bed Room condo",
    price: 70,
    type: "condo",
    account_id: 1,
    address:  %{
      street1: "1 street",
      city: "Toronto",
      state: "Ontario",
      country: "Canada",
      postal_code: "M1M2A2",
      coordinate: %{
        x: 1,
        y: 2
      }
    }
  },
  %{
    capacity: 4,
    name: "2 Bed Room condo",
    price: 100,
    type: "condo",
    account_id: 1,
    address:  %{
      street1: "2 street",
      city: "Toronto",
      state: "Ontario",
      country: "Canada",
      postal_code: "M1M2A2",
      coordinate: %{
        x: 3,
        y: 4
      }
    }
  },
  %{
    capacity: 4,
    name: "Entire house at Downtown Toronto",
    price: 120,
    type: "house",
    account_id: 2,
    address:  %{
      street1: "1 street",
      city: "Toronto",
      state: "Ontario",
      country: "Canada",
      postal_code: "M1M2A2",
      coordinate: %{
        x: 1,
        y: 2
      }
    }
  }
]

properties
|> Enum.map(&Listing.Property.changeset(%Listing.Property{}, &1))
|> Enum.map(&DB.Repo.insert!(&1))