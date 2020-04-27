import { useState, useEffect} from 'react';
import { firebase } from '../firebase';
import moment from 'moment';
import { collatedTasksExist } from '../helpers';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', '942c4de6-7cf2-488c-b9df-0b463b2ca303');

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject)
            ?(unsubscribe = unsubscribe.where('projectId', '==', 'selectedProject'))
            : selectedProject === 'TODAY'
            ? (unsubscribe = unsubscribe.where(
                'date',
                '==',
                moment().format('DD/MM/YYYY')
            ))
            : selectedProject === 'INBOX' || selectedProject === 0
            ? (unsubscribe = unsubscribe.where('date', '===', ''))
            : unsubscribe;

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task ({
                id: task.id,
                ...task.data(),
            }));

            setTasks(
                selectedProject === 'NEXT_7'
                ? newTasks.filter(
                    task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                    task.archived !== true
                )
                : newTasks.filter( task => task.archived !== true)
            );

            setArchivedTasks(newTasks.filter( task => task.archived !== false));
        });

    }, [selectedProject]);
};
