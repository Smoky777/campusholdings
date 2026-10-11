CREATE TABLE public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  company text,
  email text not null,
  subject text not null,
  message text not null,
  locale text,
  created_at timestamptz not null default now()
);

-- The contact form is public: anonymous visitors may only insert.
GRANT INSERT ON public.contact_messages TO anon;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous contact form submissions"
ON public.contact_messages
FOR INSERT
TO anon
WITH CHECK (true);