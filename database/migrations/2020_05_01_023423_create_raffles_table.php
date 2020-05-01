<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRafflesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('raffles', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title', 100)->index();
            $table->string('banner', 100);
            $table->date('draw-day');
            $table->integer('tickets');
            $table->float('ticket-price', 4, 2);
            $table->longText('description');
            $table->string('winner', 100)->nullable();
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
        Schema::dropIfExists('raffles');
    }
}
