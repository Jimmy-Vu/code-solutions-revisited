select "countries"."name" as "country",
       count("cities"."countryId") as "# of cities"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name"
  order by "# of cities" desc;
