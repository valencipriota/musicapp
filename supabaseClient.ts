import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fxbreonhlblefuilcimvp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4YnJlb25obGJlZnVpbGNpbXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NjY2MzUsImV4cCI6MjA2NDU0MjMzNX0.SEDfm3JItZvLjveIJEDdSvHsz-1zX3_XQ3Q2YONSxV4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
