CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS users (
    id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    api_id uuid NOT NULL DEFAULT uuid_generate_v4(),
    created_on timestamp without time zone NOT NULL,
    updated_on timestamp without time zone NOT NULL,
    organization_api_id uuid NOT NULL,
    email character varying(254) COLLATE pg_catalog."default" NOT NULL,
    is_admin boolean NOT NULL,
    username character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_api_id_key UNIQUE (api_id),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT organization_api_fkey FOREIGN KEY (organization_api_id)
        REFERENCES public.organizations (api_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)