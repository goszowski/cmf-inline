<div class="form-group">
	<label for="field-{{ $field->node_id }}" class="form-control_label">{{ $field->name }}</label>
	<input type="text" name="fields[{{ $group->node_id }}][{{ $field->node_id }}]" class="form-control" id="field-{{ $field->node_id }}" placeholder="{{ $field->placeholder }}">
</div>
