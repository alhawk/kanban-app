<template>
  <div class="kanban-task">
        <div class="panel-block">
            <div class="notification is-link is-light">
                <div class="content">
                    <div class="post-references">
                        <div>
                            <p><i class="fas fa-user"> </i>
                                <strong>{{doing.User.email}}</strong></p>
                        </div>
                        <div>
                            <p><i class="far fa-calendar-alt"> </i>{{doing.createdAt}}</p>
                        </div>
                    </div>
                    <div>
                        {{doing.title}}
                    </div>
                </div>
                <div class="actions">
                    <span @click="editTaskForm(doing)" class="icon has-text-info">
                        <i class="fas fa-edit"></i>
                    </span>
                    <span @click="upgradeTask(doing.id)" class="icon has-text-success">
                        <i class="fas fa-thumbs-up"></i>
                    </span>
                    <span @click="downgradeTask(doing.id)" class="icon has-text-warning">
                        <i class="fas fa-thumbs-down"></i>
                    </span>
                    <span @click="deleteTask(doing.id)" class="icon has-text-danger">
                        <i class="fas fa-trash"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "TaskDoing",
    props: ['doing'],
    methods: {
        upgradeTask(id){
            axios({
                method: "PATCH",
                url: `https://benban.herokuapp.com/tasks/up/${id}`,
                headers: {'access_token': localStorage.access_token}
            })
            .then(({data}) => {
                this.$emit('refetchTasks')
                console.log(data.message)
            })
            .catch(err => {
                console.log(err)
            })
        },

        downgradeTask(id){
            axios({
                method: "PATCH",
                url: `https://benban.herokuapp.com/tasks/down/${id}`,
                headers: {'access_token': localStorage.access_token}
            })
            .then(({data}) => {
                this.$emit('refetchTasks')
                console.log(data.message)
            })
            .catch(err => {
                this.$emit('refetchTasks')
                console.log(err)
            })
        },

        deleteTask(id){
            axios({
                method: "DELETE",
                url: `https://benban.herokuapp.com/tasks/${id}`,
                headers: {'access_token': localStorage.access_token}
            })
            .then(({data}) => {
                this.$emit('refetchTasks')
                console.log(data.message)
            })
            .catch(err => {
                console.log(err)
            })
        },

        editTaskForm(task) {
            this.$emit('editForm', task)

        }

    }

}
</script>

<style>

</style>