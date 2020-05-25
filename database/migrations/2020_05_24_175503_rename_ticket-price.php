<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameTicketPrice extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('raffles', function (Blueprint $table) {
      $table->renameColumn("ticket_price", 'price');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('raffles', function (Blueprint $table) {
      $table->renameColumn('price', 'ticket_price');
    });
  }
}
