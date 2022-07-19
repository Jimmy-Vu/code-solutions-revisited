select "a"."line1" as "address",
       "cit"."name" as "city",
       "a"."district",
       "cou"."name" as "country"
  from "addresses" as "a"
  join "cities" as "cit" using ("cityId")
  join "countries" as "cou" using ("countryId");
