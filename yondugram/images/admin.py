from django.contrib import admin
from . import models


@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):

    # 목록에서 클릭 시 이미지 편집으로 이동
    list_display_links = (
        'location',
        'caption',
    )
    
    # 자동으로 검색바 추가
    search_fields = (
        'location',
    )

    # Filter 추가
    list_filter = (
        'location',
        'creator',
    )

    # 목록 필드
    list_display = (
        'file',
        'location',
        'caption',
        'creator',
        'created_at',
        'updated_at',
    )

@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = (
        'creator',
        'image',
        'created_at',
        'updated_at',
    )

@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        'message',
        'creator',
        'image',
        'created_at',
        'updated_at',
    )