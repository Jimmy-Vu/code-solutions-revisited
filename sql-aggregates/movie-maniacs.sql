select "cus"."firstName",
       "cus"."lastName",
       sum("p"."amount") as "total spent"
  from "customers" as "cus"
  join "payments" as "p" using ("customerId")
  group by "customerId"
  order by "total spent" desc;
