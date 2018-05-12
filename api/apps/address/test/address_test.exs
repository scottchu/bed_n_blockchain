defmodule AddressTest do
  use ExUnit.Case
  doctest Address

  test "greets the world" do
    assert Address.hello() == :world
  end
end
