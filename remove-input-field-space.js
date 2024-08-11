<script>
      //Remove space from an input field in realtime
    document.getElementById('input-field-is').addEventListener('input', function (e) {
        this.value = this.value.replace(/\s+/g, '');
    });
</script>
