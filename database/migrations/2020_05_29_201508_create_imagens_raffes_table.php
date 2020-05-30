<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagensRaffesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imagens_raffles', function (Blueprint $table) {
            $table->id();
            $table->string('image', 100);
            $table->uuid('raffle_id');
            $table->foreign('raffle_id')->references('id')->on('raffles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imagens_raffles');
    }
}
