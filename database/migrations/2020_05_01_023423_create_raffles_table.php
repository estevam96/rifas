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
            $table->date('draw_day')->nullable();
            $table->integer('tickets');
            $table->float('ticket_price', 6, 2);
            $table->longText('description');
            $table->string('winner', 100)->nullable();
            $table->enum('status', ['expired', 'concluded'])->nullable();
            $table->softDeletes();
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
