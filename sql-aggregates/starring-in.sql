select "c"."name" as "category",
       count("f".*) as "# of films"
  from "categories" as "c"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
  join "films" as "f" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "a"."firstName" = 'Lisa' AND "a"."lastName" = 'Monroe'
  group by "c"."name"
  order by "# of films" desc;
