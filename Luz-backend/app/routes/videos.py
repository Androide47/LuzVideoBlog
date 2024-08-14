from flask import request, jsonify
import os
from app import app, db
from app.models import Video
from flask_jwt_extended import jwt_required, get_jwt_identity


@app.route('/upload_video', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No video file provided'}), 400

    video_file = request.files['video']
    title = request.form.get('title')
    description = request.form.get('description')

    # Save video file locally or upload to cloud storage
    file_path = f'static/videos/{video_file.filename}'  # Local storage example
    video_file.save(file_path)

    # Save video info in the database
    new_video = Video(title=title, description=description, file_path=file_path)
    db.session.add(new_video)
    db.session.commit()

    return jsonify({'message': 'Video uploaded successfully', 'video_id': new_video.id}), 201


@app.route('/delete_video/<int:video_id>', methods=['DELETE'])
def delete_video(video_id):
    video = Video.query.get_or_404(video_id)

    # Delete the video file from storage
    if os.path.exists(video.file_path):
        os.remove(video.file_path)

    # Delete the video record from the database
    db.session.delete(video)
    db.session.commit()

    return jsonify({'message': 'Video deleted successfully'}), 200

@app.route('/upload_video', methods=['POST'])
@jwt_required()
def upload_video():
    current_user = get_jwt_identity()
    # Verify if the current user has admin privileges
    if not current_user.is_admin:
        return jsonify({'error': 'Unauthorized access'}), 403

    # Proceed with the video upload logic
    ...

@app.route('/delete_video/<int:video_id>', methods=['DELETE'])
@jwt_required()
def delete_video(video_id):
    current_user = get_jwt_identity()
    # Verify if the current user has admin privileges
    if not current_user.is_admin:
        return jsonify({'error': 'Unauthorized access'}), 403

    # Proceed with the video deletion logic