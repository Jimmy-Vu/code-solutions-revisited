select "p"."amount",
       "c"."firstName" as "First Name",
       "c"."lastName" as "Last Name",
       "p"."customerId"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  order by "amount" desc
  limit 10;
