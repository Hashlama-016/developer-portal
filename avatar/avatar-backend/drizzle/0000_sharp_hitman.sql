CREATE SCHEMA "services";
--> statement-breakpoint
CREATE TABLE "services"."orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid,
	"serviceId" uuid NOT NULL,
	"metadata" json,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "services"."services" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"data" json
);
--> statement-breakpoint
ALTER TABLE "services"."orders" ADD CONSTRAINT "orders_serviceId_services_id_fk" FOREIGN KEY ("serviceId") REFERENCES "services"."services"("id") ON DELETE no action ON UPDATE no action;