<template>
    <div class="backdrop">
        <div class="modal">
            <p>Modal Content</p>
        </div>
    </div>
</template>

<style>
.modal{
    background-color: white;
    border-radius: 10px;
    margin: 100px auto;
    padding: 20px;
    width: 400px;
}

.backdrop{
    background-color: rgba(169, 100, 100, 0.5);
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
}
</style>