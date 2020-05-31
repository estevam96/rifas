<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('users')->insert([
      "name" => "Administrador",
      "email" => "admin@admin.com.br",
      "password" => Hash::make('admin@0531'),
      "role" => "admin"
    ]);
    DB::table('users')->insert([
      "name" => "Suport",
      "email" => "suport@admin.com.br",
      "password" => Hash::make('suport@0531'),
      "role" => "admin"
    ]);
  }
}
