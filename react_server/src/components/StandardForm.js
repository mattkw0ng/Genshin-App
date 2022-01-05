import './App.css';

function StandardForm({form_title, forms, advanced_settings}) {
    return (
        <form action="/oracle/index" method="post" enctype="multipart/form-data" class="form-horizontal">
        <h1 style="text-align:center"><span style="color: #7FC048">{{ form_title }} </span>
          <span style="color: #0D2A35">Form</span></h1>

        {% if advanced_settings %} 
          <h5>
            <span id="generalTag" style="cursor: pointer;" onclick="viewGeneral()">General</span> / 
            <span id="advancedTag" class="text-muted" style="cursor: pointer;" onclick="viewAdvanced()">Advanced</span>
          </h5>
          <hr>
        {% endif %}

        <div class="control-group" id="general">
          <label ></label>

          {forms.map((field) => (
          {/*fill forms*/}
          ))}
          {% for field in forms %}
            <div class="form-group">
              {{field.label}}
              {{field}}
            </div>
          {% endfor %}
        </div>

        {% if has_advanced_settings %} 
          <div class="control-group" id="advanced" style="display: none;">
            <label ></label>
            {% for field in optional_forms %}
              <div class="form-group">
                {{field.label}}
                {{field}}
              </div>
            {% endfor %}
          </div>
        {% endif %}

        <button type="submit" class="btn btn-secondary">Submit</button>
      </form>
    );
}
    
export default StandardForm