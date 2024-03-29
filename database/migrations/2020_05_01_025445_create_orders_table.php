<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('orders', function (Blueprint $table) {
      $table->id();
      $table->string('name', 100)->index();
      $table->string('phone', 11);
      $table->decimal('value_total', 6, 2);
      $table->enum('status', ['waiting', 'paid out', 'canceled'])->default('waiting');
      $table->uuid('raffle_id');
      $table->foreign('raffle_id')->references('id')->on('raffles');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('orders');
  }
}
