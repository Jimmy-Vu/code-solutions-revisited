select "a"."firstName",
       "a"."lastName",
       "films"."title" as "movie title"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  where "films"."title" = 'Jersey Sassy';
