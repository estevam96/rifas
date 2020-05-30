<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddWinningTicketToRafflesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('raffles', function (Blueprint $table) {
      $table->integer('winning_ticket')->nullable();
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
      $table->dropColumn('winning_ticket');
    });
  }
}
