export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: '14.5'
  }
  public: {
    Tables: {
      badges: {
        Row: {
          category: string
          condition_description: string | null
          condition_threshold: number | null
          created_at: string | null
          description: string | null
          icon_name: string | null
          id: string
          is_rare: boolean | null
          key: string
          name: string
          sort_order: number
        }
        Insert: {
          category: string
          condition_description?: string | null
          condition_threshold?: number | null
          created_at?: string | null
          description?: string | null
          icon_name?: string | null
          id?: string
          is_rare?: boolean | null
          key: string
          name: string
          sort_order: number
        }
        Update: {
          category?: string
          condition_description?: string | null
          condition_threshold?: number | null
          created_at?: string | null
          description?: string | null
          icon_name?: string | null
          id?: string
          is_rare?: boolean | null
          key?: string
          name?: string
          sort_order?: number
        }
        Relationships: []
      }
      content_library: {
        Row: {
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          media_url: string | null
          principle_id: string | null
          sort_order: number
          thumbnail_url: string | null
          title: string
          type: string
          unlock_level: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          media_url?: string | null
          principle_id?: string | null
          sort_order: number
          thumbnail_url?: string | null
          title: string
          type: string
          unlock_level?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          media_url?: string | null
          principle_id?: string | null
          sort_order?: number
          thumbnail_url?: string | null
          title?: string
          type?: string
          unlock_level?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'content_library_principle_id_fkey'
            columns: ['principle_id']
            isOneToOne: false
            referencedRelation: 'principles'
            referencedColumns: ['id']
          },
        ]
      }
      diagnostic_answers: {
        Row: {
          answer_value: string
          created_at: string | null
          id: string
          question_key: string
          user_id: string
        }
        Insert: {
          answer_value: string
          created_at?: string | null
          id?: string
          question_key: string
          user_id: string
        }
        Update: {
          answer_value?: string
          created_at?: string | null
          id?: string
          question_key?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'diagnostic_answers_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      objectives: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          is_custom: boolean | null
          progress_pct: number | null
          started_at: string | null
          status: string | null
          target_at: string | null
          target_days: number | null
          title: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          is_custom?: boolean | null
          progress_pct?: number | null
          started_at?: string | null
          status?: string | null
          target_at?: string | null
          target_days?: number | null
          title: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          is_custom?: boolean | null
          progress_pct?: number | null
          started_at?: string | null
          status?: string | null
          target_at?: string | null
          target_days?: number | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'objectives_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      points_log: {
        Row: {
          created_at: string | null
          id: string
          points: number
          reason: string
          reference_id: string | null
          reference_type: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          points: number
          reason: string
          reference_id?: string | null
          reference_type?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          points?: number
          reason?: string
          reference_id?: string | null
          reference_type?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'points_log_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      principles: {
        Row: {
          category: string
          created_at: string | null
          example: string | null
          full_content: string | null
          id: string
          micro_script: string | null
          number: number
          sort_order: number
          summary: string | null
          title: string
          unlock_level: number | null
        }
        Insert: {
          category: string
          created_at?: string | null
          example?: string | null
          full_content?: string | null
          id?: string
          micro_script?: string | null
          number: number
          sort_order: number
          summary?: string | null
          title: string
          unlock_level?: number | null
        }
        Update: {
          category?: string
          created_at?: string | null
          example?: string | null
          full_content?: string | null
          id?: string
          micro_script?: string | null
          number?: number
          sort_order?: number
          summary?: string | null
          title?: string
          unlock_level?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          archetype: string | null
          avatar_url: string | null
          best_streak: number
          context: string | null
          created_at: string | null
          current_streak: number
          display_name: string | null
          email: string
          id: string
          level: number
          notification_hour: string | null
          notifications_enabled: boolean | null
          objective_text: string | null
          onboarding_completed: boolean | null
          subscription_status: string
          total_points: number
          trial_ends_at: string | null
          updated_at: string | null
        }
        Insert: {
          archetype?: string | null
          avatar_url?: string | null
          best_streak?: number
          context?: string | null
          created_at?: string | null
          current_streak?: number
          display_name?: string | null
          email: string
          id: string
          level?: number
          notification_hour?: string | null
          notifications_enabled?: boolean | null
          objective_text?: string | null
          onboarding_completed?: boolean | null
          subscription_status?: string
          total_points?: number
          trial_ends_at?: string | null
          updated_at?: string | null
        }
        Update: {
          archetype?: string | null
          avatar_url?: string | null
          best_streak?: number
          context?: string | null
          created_at?: string | null
          current_streak?: number
          display_name?: string | null
          email?: string
          id?: string
          level?: number
          notification_hour?: string | null
          notifications_enabled?: boolean | null
          objective_text?: string | null
          onboarding_completed?: boolean | null
          subscription_status?: string
          total_points?: number
          trial_ends_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      program_phases: {
        Row: {
          description: string | null
          id: string
          name: string
          phase_number: number
          program_id: string
          weeks_end: number
          weeks_start: number
        }
        Insert: {
          description?: string | null
          id: string
          name: string
          phase_number: number
          program_id: string
          weeks_end: number
          weeks_start: number
        }
        Update: {
          description?: string | null
          id?: string
          name?: string
          phase_number?: number
          program_id?: string
          weeks_end?: number
          weeks_start?: number
        }
        Relationships: [
          {
            foreignKeyName: 'program_phases_program_id_fkey'
            columns: ['program_id']
            isOneToOne: false
            referencedRelation: 'programs'
            referencedColumns: ['id']
          },
        ]
      }
      program_stages: {
        Row: {
          created_at: string | null
          duration_days: number
          id: string
          mantra: string | null
          name: string
          phase_id: string
          program_id: string
          stage_number: number
          subtitle: string | null
        }
        Insert: {
          created_at?: string | null
          duration_days: number
          id: string
          mantra?: string | null
          name: string
          phase_id: string
          program_id: string
          stage_number: number
          subtitle?: string | null
        }
        Update: {
          created_at?: string | null
          duration_days?: number
          id?: string
          mantra?: string | null
          name?: string
          phase_id?: string
          program_id?: string
          stage_number?: number
          subtitle?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'program_stages_phase_id_fkey'
            columns: ['phase_id']
            isOneToOne: false
            referencedRelation: 'program_phases'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'program_stages_program_id_fkey'
            columns: ['program_id']
            isOneToOne: false
            referencedRelation: 'programs'
            referencedColumns: ['id']
          },
        ]
      }
      programs: {
        Row: {
          created_at: string | null
          description: string | null
          duration_weeks: number | null
          id: string
          name: string
          price_cents: number | null
          status: string | null
          subtitle: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_weeks?: number | null
          id: string
          name: string
          price_cents?: number | null
          status?: string | null
          subtitle?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_weeks?: number | null
          id?: string
          name?: string
          price_cents?: number | null
          status?: string | null
          subtitle?: string | null
        }
        Relationships: []
      }
      stage_daily_validations: {
        Row: {
          coaching_message: string
          day_number: number
          id: string
          protocol_id: string
          q1_execution: number
          q2_observation: number
          q3_pilotage: string
          stage_id: string
          user_id: string
          validated_at: string | null
          xp_earned: number
        }
        Insert: {
          coaching_message: string
          day_number: number
          id?: string
          protocol_id: string
          q1_execution: number
          q2_observation: number
          q3_pilotage: string
          stage_id: string
          user_id: string
          validated_at?: string | null
          xp_earned: number
        }
        Update: {
          coaching_message?: string
          day_number?: number
          id?: string
          protocol_id?: string
          q1_execution?: number
          q2_observation?: number
          q3_pilotage?: string
          stage_id?: string
          user_id?: string
          validated_at?: string | null
          xp_earned?: number
        }
        Relationships: [
          {
            foreignKeyName: 'stage_daily_validations_stage_id_fkey'
            columns: ['stage_id']
            isOneToOne: false
            referencedRelation: 'program_stages'
            referencedColumns: ['id']
          },
        ]
      }
      stage_diagnostic_responses: {
        Row: {
          created_at: string | null
          diagnostic_type: string
          id: string
          protocol_id: string | null
          question_id: string
          selected_value: number
          stage_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          diagnostic_type: string
          id?: string
          protocol_id?: string | null
          question_id: string
          selected_value: number
          stage_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          diagnostic_type?: string
          id?: string
          protocol_id?: string | null
          question_id?: string
          selected_value?: number
          stage_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'stage_diagnostic_responses_protocol_id_fkey'
            columns: ['protocol_id']
            isOneToOne: false
            referencedRelation: 'stage_protocols'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'stage_diagnostic_responses_stage_id_fkey'
            columns: ['stage_id']
            isOneToOne: false
            referencedRelation: 'program_stages'
            referencedColumns: ['id']
          },
        ]
      }
      stage_diagnostic_scores: {
        Row: {
          created_at: string | null
          diagnostic_type: string
          id: string
          score_by_protocol: Json
          score_global: number
          stage_id: string
          strongest_protocol: string | null
          user_id: string
          weakest_protocol: string | null
        }
        Insert: {
          created_at?: string | null
          diagnostic_type: string
          id?: string
          score_by_protocol: Json
          score_global: number
          stage_id: string
          strongest_protocol?: string | null
          user_id: string
          weakest_protocol?: string | null
        }
        Update: {
          created_at?: string | null
          diagnostic_type?: string
          id?: string
          score_by_protocol?: Json
          score_global?: number
          stage_id?: string
          strongest_protocol?: string | null
          user_id?: string
          weakest_protocol?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'stage_diagnostic_scores_stage_id_fkey'
            columns: ['stage_id']
            isOneToOne: false
            referencedRelation: 'program_stages'
            referencedColumns: ['id']
          },
        ]
      }
      stage_protocols: {
        Row: {
          description: string | null
          icon: string | null
          id: string
          name: string
          sort_order: number
          stage_id: string
        }
        Insert: {
          description?: string | null
          icon?: string | null
          id: string
          name: string
          sort_order: number
          stage_id: string
        }
        Update: {
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          sort_order?: number
          stage_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'stage_protocols_stage_id_fkey'
            columns: ['stage_id']
            isOneToOne: false
            referencedRelation: 'program_stages'
            referencedColumns: ['id']
          },
        ]
      }
      stage_witness_requests: {
        Row: {
          created_at: string | null
          id: string
          share_token: string
          stage_id: string
          status: string | null
          user_id: string
          witness_name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          share_token: string
          stage_id: string
          status?: string | null
          user_id: string
          witness_name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          share_token?: string
          stage_id?: string
          status?: string | null
          user_id?: string
          witness_name?: string
        }
        Relationships: [
          {
            foreignKeyName: 'stage_witness_requests_stage_id_fkey'
            columns: ['stage_id']
            isOneToOne: false
            referencedRelation: 'program_stages'
            referencedColumns: ['id']
          },
        ]
      }
      stage_witness_responses: {
        Row: {
          completed_at: string | null
          id: string
          q1: string
          q2: string
          q3: string
          request_id: string
        }
        Insert: {
          completed_at?: string | null
          id?: string
          q1: string
          q2: string
          q3: string
          request_id: string
        }
        Update: {
          completed_at?: string | null
          id?: string
          q1?: string
          q2?: string
          q3?: string
          request_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'stage_witness_responses_request_id_fkey'
            columns: ['request_id']
            isOneToOne: false
            referencedRelation: 'stage_witness_requests'
            referencedColumns: ['id']
          },
        ]
      }
      tasks: {
        Row: {
          completed_at: string | null
          created_at: string | null
          estimated_minutes: number | null
          id: string
          instructions: Json | null
          micro_script: string | null
          mood_after: string | null
          objective_id: string | null
          points_earned: number | null
          principle_id: string | null
          scheduled_date: string
          status: string | null
          title: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          estimated_minutes?: number | null
          id?: string
          instructions?: Json | null
          micro_script?: string | null
          mood_after?: string | null
          objective_id?: string | null
          points_earned?: number | null
          principle_id?: string | null
          scheduled_date: string
          status?: string | null
          title: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          estimated_minutes?: number | null
          id?: string
          instructions?: Json | null
          micro_script?: string | null
          mood_after?: string | null
          objective_id?: string | null
          points_earned?: number | null
          principle_id?: string | null
          scheduled_date?: string
          status?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'tasks_objective_id_fkey'
            columns: ['objective_id']
            isOneToOne: false
            referencedRelation: 'objectives'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'tasks_principle_id_fkey'
            columns: ['principle_id']
            isOneToOne: false
            referencedRelation: 'principles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'tasks_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      user_badges: {
        Row: {
          badge_id: string
          id: string
          unlocked_at: string | null
          user_id: string
        }
        Insert: {
          badge_id: string
          id?: string
          unlocked_at?: string | null
          user_id: string
        }
        Update: {
          badge_id?: string
          id?: string
          unlocked_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_badges_badge_id_fkey'
            columns: ['badge_id']
            isOneToOne: false
            referencedRelation: 'badges'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'user_badges_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      user_content_progress: {
        Row: {
          completed_at: string | null
          content_id: string
          id: string
          progress_pct: number | null
          started_at: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          content_id: string
          id?: string
          progress_pct?: number | null
          started_at?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          content_id?: string
          id?: string
          progress_pct?: number | null
          started_at?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_content_progress_content_id_fkey'
            columns: ['content_id']
            isOneToOne: false
            referencedRelation: 'content_library'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'user_content_progress_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      user_principles: {
        Row: {
          applications_count: number | null
          created_at: string | null
          id: string
          mastered_at: string | null
          principle_id: string
          status: string | null
          user_id: string
        }
        Insert: {
          applications_count?: number | null
          created_at?: string | null
          id?: string
          mastered_at?: string | null
          principle_id: string
          status?: string | null
          user_id: string
        }
        Update: {
          applications_count?: number | null
          created_at?: string | null
          id?: string
          mastered_at?: string | null
          principle_id?: string
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_principles_principle_id_fkey'
            columns: ['principle_id']
            isOneToOne: false
            referencedRelation: 'principles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'user_principles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      user_programs: {
        Row: {
          current_day: number | null
          current_stage_id: string | null
          id: string
          program_id: string
          started_at: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          current_day?: number | null
          current_stage_id?: string | null
          id?: string
          program_id: string
          started_at?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          current_day?: number | null
          current_stage_id?: string | null
          id?: string
          program_id?: string
          started_at?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_programs_current_stage_id_fkey'
            columns: ['current_stage_id']
            isOneToOne: false
            referencedRelation: 'program_stages'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'user_programs_program_id_fkey'
            columns: ['program_id']
            isOneToOne: false
            referencedRelation: 'programs'
            referencedColumns: ['id']
          },
        ]
      }
      weekly_reviews: {
        Row: {
          ai_recommendation: string | null
          completion_rate: number | null
          created_at: string | null
          id: string
          score: number
          tasks_completed: number | null
          tasks_total: number | null
          user_id: string
          week_start: string
        }
        Insert: {
          ai_recommendation?: string | null
          completion_rate?: number | null
          created_at?: string | null
          id?: string
          score?: number
          tasks_completed?: number | null
          tasks_total?: number | null
          user_id: string
          week_start: string
        }
        Update: {
          ai_recommendation?: string | null
          completion_rate?: number | null
          created_at?: string | null
          id?: string
          score?: number
          tasks_completed?: number | null
          tasks_total?: number | null
          user_id?: string
          week_start?: string
        }
        Relationships: [
          {
            foreignKeyName: 'weekly_reviews_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_witness_request: {
        Args: { p_token: string }
        Returns: {
          id: string
          stage_id: string
          status: string
          witness_name: string
        }[]
      }
      submit_witness_response: {
        Args: { p_q1: string; p_q2: string; p_q3: string; p_token: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
