<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->integer('ticket');
            $table->enum('status', ['reserved', 'paid out'])->default('reserved');
            $table->foreignId('order_id')->constrained('orders')->onDelete('cascade');
            $table->uuid('raffle_id');
            $table->foreign('raffle_id')->references('id')->on('raffles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tickets');
    }
}
